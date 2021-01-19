const Button = ({ children, className }) => {
  return (
    <button className={`
      tw-border-2 tw-border-white tw-rounded py-6 px-12
      hover:tw-bg-purple-700 hover:tw-border-transparent focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-600 focus:tw-ring-opacity-50
      ${className || ""} 
    `}>
      {children}
    </button>
  )
}

export default Button