import * as React from "react"

export type HeaderProps = {
  title: string
  version?: number
  handleHeaderClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ title, version, handleHeaderClick }) => {
  const [menuPrinted, setMenuPrinted] = React.useState(false)

  const handleClick = () => {
    setMenuPrinted((v) => !v)
    handleHeaderClick?.()
  }

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <h1
          className="cursor-pointer select-none text-2xl font-extrabold tracking-tight md:text-4xl"
          onClick={handleClick}
          aria-label="Toggle header message"
        >
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
          {typeof version !== "undefined" && (
            <span className="ml-2 align-middle text-sm font-medium opacity-80">
              v{version}
            </span>
          )}
        </h1>
      </div>
    </header>
  )
}

export default Header
