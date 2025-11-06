'use client';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, Fragment, useMemo } from 'react';
import { Calendar, List, Search, Check, X, User, Clock, AlertTriangle } from 'lucide-react';
import { adminData } from '../adminData';
import { Dialog, Transition } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';

moment.locale('fr');
const localizer = momentLocalizer(moment);

const messages = { today: "Aujourd'hui", previous: '‹', next: '›', month: 'Mois', week: 'Semaine', day: 'Jour', agenda: 'Agenda' };

const AdminAppointmentDetailModal = ({ event, isOpen, setIsOpen }) => {
    if (!event) return null;
    return (
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                            <Dialog.Title as="h3" className="text-2xl font-bold text-[#1f2937]">{event.service}</Dialog.Title>
                            <div className="mt-4 space-y-3">
                                <p className="flex items-center gap-2"><User size={16} className="text-[#af4d30]"/> <strong className="font-semibold">{event.clientName}</strong></p>
                                <p className="flex items-center gap-2"><Calendar size={16} className="text-[#af4d30]"/> {moment(event.start).format('dddd D MMMM YYYY')}</p>
                                <p className="flex items-center gap-2"><Clock size={16} className="text-[#af4d30]"/> De {moment(event.start).format('HH:mm')} à {moment(event.end).format('HH:mm')}</p>
                            </div>
                            {event.status === 'en attente' && (
                                <div className="mt-6 p-4 bg-amber-50 rounded-lg text-amber-800 flex items-start gap-3">
                                    <AlertTriangle size={20} className="flex-shrink-0"/>
                                    <div >
                                        <h4 className="font-bold">Action Requise</h4>
                                        <p className="text-sm">Ce rendez-vous est en attente de votre confirmation.</p>
                                        <div className="flex gap-2 mt-3">
                                            <button className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-md font-semibold">Annuler</button>
                                            <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold">Accepter</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="mt-6"><button onClick={() => setIsOpen(false)} className="w-full rounded-lg border border-gray-300 py-2 font-medium">Fermer</button></div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const eventStyleGetter = (event) => {
    let style = { borderRadius: '5px', border: 'none', color: 'white' };
    if (event.status === 'accepté') style.backgroundColor = '#28a745'; // Vert
    else if (event.status === 'en attente') style.backgroundColor = '#ffc107'; // Jaune
    else if (event.status === 'annulé') style.backgroundColor = '#dc3545'; // Rouge
    return { style };
};

export default function AdminAppointmentsPage() {
    const [viewMode, setViewMode] = useState('calendar');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [calendarView, setCalendarView] = useState('month'); 

    const events = adminData.appointments.map(a => ({
        id: a.id,
        title: `${a.service} - ${a.clientName}`,
        start: a.date,
        end: moment(a.date).add(1, 'hour').toDate(), // On suppose 1h par défaut
        status: a.status,
        clientName: a.clientName,
        service: a.service,
    }));

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter, events]);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    return (
        <div>
            <Toaster/>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gestion des Rendez-vous</h1>
                <div className="flex gap-1 bg-gray-200 p-1 rounded-lg">
                    <button onClick={() => setViewMode('calendar')} className={`p-2 rounded-md ${viewMode === 'calendar' ? 'bg-white shadow-sm' : ''}`}><Calendar size={20}/></button>
                    <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}><List size={20}/></button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative md:col-span-2">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="text" placeholder="Rechercher par service ou client..." className="w-full pl-10 py-2 border rounded-lg" onChange={e => setSearchTerm(e.target.value)} />
                    </div>
                    <select className="py-2 px-3 border rounded-lg" onChange={e => setStatusFilter(e.target.value)}>
                        <option value="all">Tous les statuts</option>
                        <option value="en attente">En attente</option>
                        <option value="accepté">Accepté</option>
                        <option value="annulé">Annulé</option>
                    </select>
                </div>

                {viewMode === 'calendar' ? (
                    <BigCalendar
                        localizer={localizer}
                        events={filteredEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 700 }}
                        messages={messages}
                        eventPropGetter={eventStyleGetter}
                        onSelectEvent={handleSelectEvent} // <-- ACTION AU CLIC
                        view={calendarView}
                        onView={view => setCalendarView(view)}
                        views={['month', 'week', 'day']} // On active les vues
                        step={60} // Créneaux de 60 minutes
                        timeslots={1}
                        min={moment().hour(8).minute(0).toDate()} // Début de journée à 8h
                        max={moment().hour(20).minute(0).toDate()}                                                                                                                                                                                        
                    />
                ) : (
                    <div className="space-y-3">
                        {filteredEvents.map(event => (
                            <div key={event.id} className="grid grid-cols-5 items-center p-3 bg-gray-50 rounded-lg">
                                <div><p className="font-bold">{event.service}</p><p className="text-sm text-gray-500">{event.clientName}</p></div>
                                <p className="text-gray-600">{moment(event.start).format('D MMM YYYY, HH:mm')}</p>
                                <div className="text-center">
                                    <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${eventStyleGetter(event).style.backgroundColor === '#ffc107' ? 'bg-amber-100 text-amber-700' : (eventStyleGetter(event).style.backgroundColor === '#28a745' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')}`}>{event.status}</span>
                                </div>
                                <p className="text-gray-600">{event.type}</p>
                               <div className="flex justify-end gap-2">
                                    <button onClick={() => handleSelectEvent(event)} className="text-sm font-semibold text-[#af4d30] hover:underline">Détails</button>
                                    {event.status === 'en attente' && (
                                        <>
                                            <button className="p-2 bg-red-100 text-red-600 rounded-md"><X size={16}/></button>
                                            <button className="p-2 bg-green-100 text-green-600 rounded-md"><Check size={16}/></button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <AdminAppointmentDetailModal event={selectedEvent} isOpen={isModalOpen} setIsOpen={setModalOpen} />
        </div>
    );
}