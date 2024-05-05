import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MenuList = () => {
  const SideMenuItems = {
    Home: "/",
    Store: "/store",
    Search: "/search",
    Account: "/account",
  }
  return (
    <div className="flex items-center h-full">
      {Object.entries(SideMenuItems).map(([name, href]) => {
        return (
          <div className="ml-3" key={name}>
            <LocalizedClientLink href={href} className="leading-10 ">
              {name}
            </LocalizedClientLink>
          </div>
        )
      })}
    </div>
  )
}

export default MenuList
