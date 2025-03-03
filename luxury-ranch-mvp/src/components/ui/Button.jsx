import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  disabled = false,
  className = '',
  href,
  to,
  onClick,
  type = 'button',
  fullWidth = false,
  animate = true,
  ...props
}) => {
  // Configuration des styles selon les variantes
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none";
  
  // Styles pour les variantes
  const variantStyles = {
    primary: "bg-ranch-400 hover:bg-ranch-500 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-ranch-300 focus:ring-offset-2",
    secondary: "bg-white hover:bg-silver-50 text-ranch-600 border border-silver-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-ranch-300 focus:ring-offset-2",
    gold: "bg-gradient-gold text-luxury-black shadow-gold hover:opacity-90 focus:ring-2 focus:ring-gold-300 focus:ring-offset-2",
    outline: "bg-transparent border-2 border-ranch-400 text-ranch-500 hover:bg-ranch-50 focus:ring-2 focus:ring-ranch-300 focus:ring-offset-2",
    text: "bg-transparent text-ranch-500 hover:text-ranch-600 hover:bg-ranch-50 shadow-none",
    dark: "bg-luxury-black hover:bg-luxury-black-light text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-ranch-300 focus:ring-offset-2",
  };
  
  // Styles pour les tailles
  const sizeStyles = {
    xs: "text-xs py-1 px-2.5",
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-5",
    lg: "text-lg py-3 px-6",
    xl: "text-xl py-4 px-8"
  };
  
  // Style pour largeur complète
  const widthStyle = fullWidth ? "w-full" : "";
  
  // Style pour état désactivé
  const disabledStyle = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  // Combinaison des styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // Animation pour le bouton
  const buttonVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
  };
  
  // Rendu du contenu intérieur du bouton
  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );
  
  // Si c'est un lien externe
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        variants={buttonVariants}
        disabled={disabled}
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }
  
  // Si c'est un lien React Router
  if (to) {
    return (
      <motion.div
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        variants={buttonVariants}
      >
        <Link
          to={to}
          className={buttonStyles}
          {...props}
        >
          {renderContent()}
        </Link>
      </motion.div>
    );
  }
  
  // Sinon, c'est un bouton standard
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      whileHover={animate && !disabled ? "hover" : undefined}
      whileTap={animate && !disabled ? "tap" : undefined}
      variants={buttonVariants}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;