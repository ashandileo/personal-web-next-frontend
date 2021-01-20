const Badge = ({ children, containerClass, badgeClass }) => {

  return (
    <div className={`${containerClass || ""} tw-cursor-default tw-whitespace-no-wrap`}>
      <p className={`${badgeClass || ""} tw-inline-block tw-py-1 tw-px-2 tw-text-xs tw-text-white tw-font-medium tw-rounded-md`}>
        {children}
      </p>
    </div>
  )
}

export default Badge