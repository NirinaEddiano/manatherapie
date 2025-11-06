'use client';


import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, Fragment, useMemo } from 'react';
import { PlusCircle, Calendar, List, X, AlertTriangle, Video, MapPin, Search, Clock,CalendarIcon } from 'lucide-react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { servicesDetails } from '@/app/soins/servicesData';
import { useRouter } from 'next/navigation';

// Configurer Moment.js en français
moment.locale('fr');
const localizer = momentLocalizer(moment);

const messages = { today: "Aujourd'hui", previous: '‹', next: '›', month: 'Mois', week: 'Semaine', day: 'Jour', agenda: 'Agenda', noEventsInRange: 'Aucun rendez-vous.' };

// Données factices pour les événements
const allEvents = [
    { id: 0, title: 'MANAXDRAIN', start: new Date(2025, 10, 10, 14, 0), end: new Date(2025, 10, 10, 15, 0), status: 'confirmé', userOwns: true, type: 'soin', location: "24 impasse de l’estivage 13800 Istres" },
    { id: 1, title: 'Coaching en Ligne', start: new Date(2025, 10, 18, 10, 0), end: new Date(2025, 10, 18, 11, 0), status: 'confirmé', userOwns: true, type: 'coaching', location: "Lien Meet disponible", meetLink: "https://meet.google.com/xyz-abc-def" },
    { id: 2, title: 'Créneau Réservé', start: new Date(2025, 10, 12, 11, 0), end: new Date(2025, 10, 12, 12, 0), status: 'occupé', userOwns: false,type: 'soin' },
    { id: 3, title: 'Maderothérapie', start: new Date(2025, 9, 28, 16, 0), end: new Date(2025, 9, 28, 17, 0), status: 'passé', userOwns: true, type: 'soin', location: "24 impasse de l’estivage 13800 Istres" },
];

// Style personnalisé pour les événements
const eventStyleGetter = (event) => {
    let style = {
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        fontSize: '0.8rem',
    };
    if (event.status === 'confirmé') style.backgroundColor = '#28a745'; // Vert
    else if (event.status === 'à venir') style.backgroundColor = '#17a2b8'; // Bleu
    else if (event.status === 'occupé') style.backgroundColor = '#dc3545'; // Rouge
    return { style };
};

const AppointmentDetailModal = ({ event, isOpen, setIsOpen }) => {
    if (!event) return null;

    const onCancel = () => {
        // Logique de suppression (ici, un simple toast)
        toast.success("Votre rendez-vous a été annulé.");
        setIsOpen(false);
    };

    return (
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-[#1f2937]">{event.title}</Dialog.Title>
                                <div className="mt-4 space-y-3">
                                    <p className="flex items-center gap-2"><Calendar size={16} className="text-[#af4d30]"/> {moment(event.start).format('dddd D MMMM YYYY')}</p>
                                    <p className="flex items-center gap-2"><Clock size={16} className="text-[#af4d30]"/> De {moment(event.start).format('HH:mm')} à {moment(event.end).format('HH:mm')}</p>
                                    <p className="flex items-center gap-2">
                                        {(event.type === 'coaching' && event.status === 'confirmé' && event.meetLink) ? (
                                <a href={event.meetLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Rejoindre la session</a>
                            ) : (
                                <span className="font-semibold">{event.location}</span>
                            )}
                                    </p>
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <button onClick={() => setIsOpen(false)} className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium">Fermer</button>
                                    <button onClick={onCancel} className="flex-1 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200">Annuler le RDV</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};


const CreateAppointmentModal = ({ slot, isOpen, setIsOpen }) => {
    const router = useRouter(); // Initialiser le router
    const [selectedService, setSelectedService] = useState(Object.values(servicesDetails)[0].slug);
    const [showAcompte, setShowAcompte] = useState(true);

    const handleServiceChange = (e) => {
        const serviceSlug = e.target.value;
        setSelectedService(serviceSlug);
        const service = servicesDetails[serviceSlug];
        // On vérifie si le service a un prix ou s'il est "Sur devis"
        setShowAcompte(service.pricing.options[0]?.price !== 'Sur devis');
    };
    
    const onConfirm = (e) => {
        e.preventDefault();
        toast.success("Votre demande est envoyée ! Redirection vers le paiement...");
        setIsOpen(false);
        // SIMULATION : Rediriger vers une page de paiement après un délai
        setTimeout(() => {
            router.push('/paiement'); 
        }, 1500);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                                <Dialog.Title as="h3" className="text-2xl font-bold text-[#1f2937]">Nouveau Rendez-vous</Dialog.Title>
                                
                                <form onSubmit={onConfirm} className="mt-6 space-y-4">
                                    {/* Si on n'a pas cliqué sur le calendrier, on affiche le choix de date */}
                                    {!slot && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-semibold text-sm">Date</label>
                                                <input type="date" className="w-full mt-1 p-3 border rounded-lg"/>
                                            </div>
                                             <div>
                                                <label className="font-semibold text-sm">Heure</label>
                                                <input type="time" className="w-full mt-1 p-3 border rounded-lg"/>
                                            </div>
                                        </div>
                                    )}
                                    {/* Si on a cliqué sur le calendrier, on affiche le créneau */}
                                    {slot && <p className="text-gray-500 mt-1">Créneau : {moment(slot.start).format('dddd D MMMM, HH:mm')}</p>}

                                    <div>
                                        <label className="font-semibold text-sm">Type de soin</label>
                                        <select onChange={handleServiceChange} className="w-full mt-1 p-3 border border-gray-200 rounded-lg">
                                            {Object.values(servicesDetails).map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                                            <option value="coaching-ligne">Coaching en Ligne</option>
                                            <option value="coaching-presentiel">Coaching Présentiel</option>
                                        </select>
                                    </div>

                                    {/* Affichage conditionnel de l'acompte */}
                                    {showAcompte && (
                                        <div>
                                            <label className="font-semibold text-sm">Acompte Requis</label>
                                            <input type="text" value="15.00€" readOnly className="w-full mt-1 p-3 border bg-gray-100 text-gray-500 rounded-lg"/>
                                        </div>
                                    )}

                                    <div>
                                        <label className="font-semibold text-sm">Notes (optionnel)</label>
                                        <textarea placeholder="Indiquez ici toute information utile..." className="w-full mt-1 p-3 border border-gray-200 rounded-lg" rows="3"></textarea>
                                    </div>
                                    
                                    <div className="pt-4 flex gap-4">
                                        <button type="button" onClick={() => setIsOpen(false)} className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium">Annuler</button>
                                        <button type="submit" className="flex-1 rounded-lg bg-[#af4d30] py-2.5 font-medium text-white hover:bg-opacity-90">Confirmer & Payer l'acompte</button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const AppointmentCard = ({ event, onSelect }) => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
            <div className={`w-2.5 h-16 rounded-full ${eventStyleGetter(event).style.backgroundColor}`}></div>
            <div>
                <p className="font-bold text-lg text-[#1f2937]">{event.title}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2"><CalendarIcon size={14}/> {moment(event.start).format('dddd D MMMM YYYY')}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2"><Clock size={14}/> {moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
             <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${event.status === 'confirmé' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{event.status}</span>
            <button onClick={() => onSelect(event)} className="text-sm font-semibold text-[#af4d30] hover:underline">Détails</button>
        </div>
    </motion.div>
);

export default function AppointmentsPage() {
    const [activeTab, setActiveTab] = useState('calendar');
    const [viewMode, setViewMode] = useState('calendar');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isDetailModalOpen, setDetailModalOpen] = useState(false);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const [calendarView, setCalendarView] = useState('month'); 

    const myEvents = allEvents.filter(e => e.userOwns);

    const filteredEvents = useMemo(() => {
        return myEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter]);

    const handleEventSelect = (event) => {
        if (!event.userOwns) {
            toast.error("Ce créneau est déjà réservé par un autre client.");
            return;
        }
        setSelectedEvent(event);
        setDetailModalOpen(true);
    };

    const handleSlotSelect = (slotInfo) => {
        // On vérifie si le créneau n'est pas dans le passé
        if (moment(slotInfo.start).isBefore(moment(), 'day')) {
            toast.error("Vous ne pouvez pas réserver dans le passé.");
            return;
        }
        setSelectedSlot(slotInfo);
        setCreateModalOpen(true);
    };

     const handleNewAppointment = () => {
        setSelectedSlot({
            start: new Date(), // On initialise avec la date/heure actuelle
            end: moment().add(1, 'hour').toDate()
        });
        setCreateModalOpen(true);
    };

    const tabs = [
        { id: 'calendar', name: 'Calendrier', icon: <CalendarIcon size={18}/> },
        { id: 'soins', name: 'Mes Soins', icon: <List size={18}/> },
        { id: 'coaching', name: 'Mes Coachings', icon: <List size={18}/> },
    ];

    return (
        <div className="relative z-[2]">
            <Toaster position="bottom-right" />
            <div className="relative z-[2]  flex justify-between items-center mb-8">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937]">
                    Mes Rendez-vous
                </motion.h1>
                <div className="flex items-center gap-4">
                    {/* Switch de vue */}
                    <div className="flex gap-1 bg-gray-200 p-1 rounded-lg">
                        <button onClick={() => setViewMode('calendar')} className={`p-1.5 rounded-md ${viewMode === 'calendar' ? 'bg-white shadow-sm' : ''}`}><Calendar size={20}/></button>
                        <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}><List size={20}/></button>
                    </div>
                    <motion.button onClick={handleNewAppointment} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 bg-[#af4d30] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-opacity-90">
                        <PlusCircle size={20}/>
                        <span>Nouveau RDV</span>
                    </motion.button>
                </div>
            </div>

            <div className="relative z-[2]  mb-6 border-b border-gray-200">
                <nav className="-mb-px gap-4 flex space-x-6">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 py-3 px-1 border-b-2 font-semibold ${activeTab === tab.id ? 'border-[#af4d30] text-[#af4d30]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            {tab.icon} {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                    <input type="text" placeholder="Rechercher un soin..." className="w-full pl-10 pr-4 py-2 border rounded-lg" onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <input type="date" className="p-2 border rounded-lg" value={moment(currentDate).format('YYYY-MM-DD')} onChange={e => setCurrentDate(new Date(e.target.value))}/>
                <select className="p-2 border rounded-lg" onChange={e => setStatusFilter(e.target.value)}>
                    <option value="all">Tous les statuts</option>
                    <option value="confirmé">Confirmé</option>
                    <option value="à venir">À venir</option>
                    <option value="passé">Passé</option>
                </select>
            </div>
            
            <AnimatePresence mode="wait">
                {viewMode === 'calendar' ? (
                    <motion.div key="calendar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white p-6 rounded-2xl shadow-sm">
                        {activeTab === 'calendar' && (
                        <div className="bg-white p-2 sm:p-4 rounded-2xl shadow-sm">
                        <BigCalendar
                            localizer={localizer}
                            events={allEvents}
                            date={currentDate} onNavigate={date => setCurrentDate(date)}
                            style={{ height: 600 }}
                            messages={messages}
                            eventPropGetter={eventStyleGetter}
                            onSelectEvent={handleEventSelect}
                            selectable
                            onSelectSlot={handleSlotSelect}
                            view={calendarView}
                            onView={view => setCalendarView(view)}
                                views={['month', 'week', 'day']} // On active les vues
                                step={60} // Créneaux de 60 minutes
                                timeslots={1}
                                min={moment().hour(8).minute(0).toDate()} // Début de journée à 8h
                                max={moment().hour(20).minute(0).toDate()}
                        />
                          </div>
                    )}
                    {activeTab === 'soins' && (
                        <div className="space-y-4">
                            {myEvents.filter(e => e.type === 'soin').map(event => (
                                <AppointmentCard key={event.id} event={event} onSelect={handleEventSelect} />
                            ))}
                        </div>
                    )}
                    {activeTab === 'coaching' && (
                         <div className="space-y-4">
                            {myEvents.filter(e => e.type === 'coaching').map(event => (
                                <AppointmentCard key={event.id} event={event} onSelect={handleEventSelect} />
                            ))}
                        </div>
                    )}
                    </motion.div>
                ) : (
                    <motion.div key="list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        {filteredEvents.length > 0 ? filteredEvents.map(event => (
                            // --- VUE LISTE MAINTENANT REMPLIE ---
                            <div key={event.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className={`w-2 h-12 rounded-full ${eventStyleGetter(event).style.backgroundColor}`}></div>
                                    <div>
                                        <p className="font-bold text-[#1f2937]">{event.title}</p>
                                        <p className="text-sm text-gray-500">{moment(event.start).format('dddd D MMMM, HH:mm')}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleEventSelect(event)} className="text-sm font-semibold text-[#af4d30] hover:underline">Voir détails</button>
                            </div>
                        )) : <p className="text-center text-gray-500 py-8">Aucun rendez-vous ne correspond à vos filtres.</p>}
                    </motion.div>
                )}
            </AnimatePresence>

            <AppointmentDetailModal event={selectedEvent} isOpen={isDetailModalOpen} setIsOpen={setDetailModalOpen} />
            <CreateAppointmentModal slot={selectedSlot} isOpen={isCreateModalOpen} setIsOpen={setCreateModalOpen} />
        </div>
    );
}