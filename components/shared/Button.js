const Button = ({ children, className }) => {
  return (
    <button className={`
      tw-border-2 tw-bg-purple-700 tw-border-none tw-rounded py-8 px-14
      hover:tw-bg-purple-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-600 focus:tw-ring-opacity-50
      ${className || ""} 
    `}>
      {children}
    </button>
  )
}

export default Button