'use client';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Loader, AlertTriangle, ArrowLeft, X } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { Suspense, useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const fetcher = url => fetch(url).then(res => {
    if (!res.ok) return res.json().then(data => ({ error: true, message: data.message }));
    return res.json();
});

function PaiementPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { appointmentId } = useParams();
    const [isCancelModalOpen, setCancelModalOpen] = useState(false);
    
    const { data: appointment, error } = useSWR(`/api/appointments/${appointmentId}`, fetcher);

    useEffect(() => {
        if (searchParams.get('payment') === 'canceled') {
            toast.error("Paiement annulé. Vous pouvez réessayer.", { duration: 5000 });
        }
    }, [searchParams]);
    
    const doCancel = async () => {
        setCancelModalOpen(false);
        const toastId = toast.loading("Annulation en cours...");
        try {
            const res = await fetch('/api/appointments/cancel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ appointmentId }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Impossible d'annuler.");
            }
            toast.success("Rendez-vous annulé.", { id: toastId });
            router.push('/compte/rendez-vous');
        } catch (err) {
            toast.error(err.message, { id: toastId });
        }
    };

    const handlePayment = async () => {
        const toastId = toast.loading("Préparation du paiement...");
        try {
            const res = await fetch('/api/checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ appointmentId }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            
            toast.success("Redirection vers Stripe...", { id: toastId });
            router.push(data.url);
        } catch (err) {
            toast.error(err.message || "Impossible de lancer le paiement.", { id: toastId });
        }
    };

    if (error) return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="text-center p-8">
                <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
                <p className="mt-4 font-semibold text-gray-800">Erreur de chargement</p>
                <p className="text-gray-500">{error.message || "Impossible de récupérer les détails du rendez-vous."}</p>
            </div>
        </main>
    );

    if (!appointment) return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <Loader className="mx-auto h-12 w-12 animate-spin" />
        </main>
    );

    if (appointment.paid) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <Toaster />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    <h1 className="text-3xl font-bold text-gray-800 mt-4">Déjà confirmé</h1>
                    <p className="text-gray-500 mt-2">Ce rendez-vous pour "{appointment.serviceTitle}" est déjà {appointment.status === 'confirmé' ? 'confirmé' : 'traité'}.</p>
                    <Link href="/compte/rendez-vous" className="mt-6 inline-flex items-center gap-2 bg-[#af4d30] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
                        <ArrowLeft size={20} /> Mes rendez-vous
                    </Link>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <Toaster />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    <h1 className="text-3xl font-bold text-gray-800 mt-4">Confirmez votre Rendez-vous</h1>
                    <p className="text-gray-500 mt-2">Veuillez vérifier les détails et procéder au paiement pour confirmer votre créneau.</p>
                </div>
                <div className="mt-8 space-y-4 border-t border-b py-6">
                    <div className="flex justify-between"><span className="text-gray-600">Service</span><span className="font-semibold">{appointment.serviceTitle}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Date</span><span className="font-semibold">{new Date(appointment.startTime).toLocaleDateString('fr-FR')}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Heure</span><span className="font-semibold">{new Date(appointment.startTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span></div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between items-baseline font-bold text-gray-800">
                        <span>{appointment.isAcompte ? 'Acompte à payer' : 'Total à payer'}</span>
                        <span className="text-3xl">{Number(appointment.amountToPay).toFixed(2)}€</span>
                    </div>
                </div>
                <div className="mt-8 flex gap-3">
                    <button onClick={() => setCancelModalOpen(true)} className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Annuler
                    </button>
                    <button onClick={handlePayment} className="flex-1 bg-[#af4d30] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 flex items-center justify-center gap-2">
                        <CreditCard size={20} /> Payer
                    </button>
                </div>
            </motion.div>

            <Transition appear show={isCancelModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setCancelModalOpen(false)}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/30" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-sm transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                                    <Dialog.Title as="h3" className="text-lg font-bold text-[#1f2937]">Annuler ce rendez-vous ?</Dialog.Title>
                                    <p className="mt-2 text-sm text-gray-500">Cette action est irréversible. Le créneau sera libéré.</p>
                                    <div className="mt-6 flex gap-3">
                                        <button onClick={() => setCancelModalOpen(false)} className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium">Retour</button>
                                        <button onClick={doCancel} className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Confirmer l'annulation</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </main>
    );
}

export default function PaiementPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <Loader className="mx-auto h-12 w-12 animate-spin" />
            </main>
        }>
            <PaiementPageContent />
        </Suspense>
    );
}