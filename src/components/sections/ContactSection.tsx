// src/components/sections/ContactSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Image from 'next/image';

interface ContactSectionProps {
    dictionary: {
        title: string;
        subtitle: string;
        form: {
            nameLabel: string;
            namePlaceholder: string;
            emailLabel: string;
            emailPlaceholder: string;
            numberLabel: string;
            numberPlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submitButton: string;
            successMessage: string;
        };
        info: {
            phoneTitle: string;
            phone: string;
            emailTitle: string;
            email: string;
            addressTitle: string;
            address: string;
            hoursTitle: string;
            hours: string;
        };
        cta: {
            text: string;
            link: string;
        };
    };
    currentLang: string;
}

export default function ContactSection({ dictionary, currentLang }: ContactSectionProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber:'',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '',phonenumber: ''});
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                        {dictionary.title}
                    </h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                        {dictionary.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                                {dictionary.form.successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                    {dictionary.form.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={dictionary.form.namePlaceholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    {dictionary.form.emailLabel}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={dictionary.form.emailPlaceholder}
                                />
                            </div>
                            <div>
                                <label htmlFor="number" className="block text-sm font-medium text-neutral-700 mb-2">
                                    {dictionary.form.numberLabel}
                                </label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={dictionary.form.numberPlaceholder}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                                    {dictionary.form.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={dictionary.form.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <span className="animate-spin mr-2">⏳</span>
                                ) : (
                                    <Send className="w-5 h-5 mr-2"/>
                                )}
                                {dictionary.form.submitButton}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                Get in Touch
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0"/>
                                    <div>
                                        <h4 className="font-medium text-neutral-900">{dictionary.info.phoneTitle}</h4>
                                        <p className="text-neutral-700">{dictionary.info.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-neutral-900">{dictionary.info.emailTitle}</h4>
                                        <p className="text-neutral-700">{dictionary.info.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-neutral-900">{dictionary.info.addressTitle}</h4>
                                        <p className="text-neutral-700">{dictionary.info.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-neutral-900">{dictionary.info.hoursTitle}</h4>
                                        <p className="text-neutral-700">{dictionary.info.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl p-8 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                Ready to Start Your Journey?
                            </h3>
                            <p className="mb-6">
                                Book a free consultation with our expert advisors today.
                            </p>
                            <Link
                                href={`/${currentLang}${dictionary.cta.link}`}
                                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                            >
                                {dictionary.cta.text}
                            </Link>
                        </div>
                    </div>
                </div>

                {/*/!* Map or Team Photo *!/*/}
                {/*<div className="mt-16">*/}
                {/*    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">*/}
                {/*        <Image*/}
                {/*            src="/contact/map.jpg" // or "/contact/team-photo.jpg"*/}
                {/*            alt="Our Location"*/}
                {/*            fill*/}
                {/*            className="object-cover"*/}
                {/*            priority={false}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
