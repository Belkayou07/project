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
    <div 
      id="contact" 
      className="min-h-screen bg-green-50 py-[5%] px-[5%] 
      flex flex-col items-center justify-center 
      border-t-[16px] border-l-[16px] border-r-[16px] border-white 
      relative pb-4"
    >
      <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Column - Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col h-full"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('contact.title')}
            </h2>

            <div className="space-y-4">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-white p-3 rounded-full shadow-md">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-base md:text-lg text-gray-800">
                  {t('contact.location')}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <a
                  href={`tel:${t('contact.phone')}`}
                  className="text-base md:text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-base md:text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.email')}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Logo Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src={LogoImage}
            alt="Oh Brunch Logo"
            className="mt-auto w-full max-w-[300px] mx-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('home')}
          />
        </motion.div>

        {/* Right Column - Form and Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-6"
        >
          {/* Contact Form */}
          <form className="space-y-4">
            <motion.input
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              type="text"
              placeholder={t('contact.form.name')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <motion.input
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              type="email"
              placeholder={t('contact.form.email')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <motion.textarea
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              rows={4}
              placeholder={t('contact.form.message')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent h-[100px]"
            />
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              type="submit"
              className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-colors text-base"
            >
              {t('contact.form.submit')}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-2xl border-t border-green-300 pt-4 text-center"
      >
        <p className="text-sm text-gray-600 mb-0">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </motion.footer>
    </div>
  );
};