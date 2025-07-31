"use client";
import { useEffect, useState } from "react";

interface CenterAlertProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export const CenterAlert = ({ 
  message, 
  duration = 1200, 
  onClose 
}: CenterAlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '1.5rem 2rem',
      borderRadius: '8px',
      zIndex: 1000,
      minWidth: '250px',
      maxWidth: '80%',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <div>{message}</div>
      <div style={{
        width: '100%',
        height: '3px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <div 
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: `${(duration / duration) * 100}%`,
            animation: `progress ${duration}ms linear forwards`,
          }}
        />
      </div>
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};