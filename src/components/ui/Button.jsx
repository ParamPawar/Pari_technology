export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300";
  
  const variants = {
    primary: "px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600",
    secondary: "px-8 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 transform hover:scale-105"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
