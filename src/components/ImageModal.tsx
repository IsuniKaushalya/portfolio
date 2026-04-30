import React, { useEffect } from 'react';

interface ImageModalProps {
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, imageAlt, onClose }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);

        // Prevent body scroll and save original styles
        const originalStyle = window.getComputedStyle(document.body).overflow;
        const originalPosition = window.getComputedStyle(document.body).position;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;

        return () => {
            document.removeEventListener('keydown', handleEscape);
            // Restore original styles
            document.body.style.overflow = originalStyle;
            document.body.style.position = originalPosition;
            document.body.style.width = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-9999 flex items-start justify-center bg-black bg-opacity-90 p-4 pt-8"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={onClose}
        >
            <div
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all shadow-lg z-10"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6 text-text-primary dark:text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Full size image */}
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default ImageModal;
