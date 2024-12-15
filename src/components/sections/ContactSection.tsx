import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import LogoImage from '../../images/LogoImage/LogoImage.png';

export const ContactSection: React.FC<{ scrollToSection?: (section: string) => void }> = ({ scrollToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
} }) => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="h-screen bg-green-50 py-[5%] px-[5%] flex items-center justify-center border-t-[16px] border-l-[16px] border-r-[16px] border-white relative">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col h-full"
        >
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">{t('contact.title')}</h2>
            
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-lg text-gray-800">
                  {t('contact.location')}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <a 
                  href={`tel:${t('contact.phone')}`} 
                  className="text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <a 
                  href={`mailto:${t('contact.email')}`} 
                  className="text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Logo Image */}
          <img 
            src={LogoImage} 
            alt="Oh Brunch Logo" 
            className="mt-auto w-full max-w-[300px] mx-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('home')}
          />
        </motion.div>

        {/* Right Column - Form and Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t('contact.form.name')}
              className="w-full px-4 py-2 border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder={t('contact.form.email')}
              className="w-full px-4 py-2 border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <textarea
              rows={4}
              placeholder={t('contact.form.message')}
              className="w-full px-4 py-2 border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent h-[100px]"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </form>

          {/* Map */}
          <div className="h-[250px] rounded-none shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.7971971666!2d4.5304!3d50.8853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3c3c3c3c3c3%3A0x47c3c3c3c3c3c3c3!2sLesagestraat+39%2C+1820+Steenokkerzeel!5e0!3m2!1sen!2sbe!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>

      {/* Mini Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center text-sm text-gray-600">
        {t('footer.copyright', { year: new Date().getFullYear() })}. {t('footer.allRightsReserved')}
      </div>
    </div>
  );
};