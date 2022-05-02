import React, { FC, ReactNode } from "react"

export interface ContainerProps {
  children?: ReactNode
  background?: string
  outerPadding?: string
  innerPadding?: string
}

const Container: FC<ContainerProps> = ({
  children,
  background = "bg-white",
  outerPadding = " py-[20px] lg:py-[96px] ",
  innerPadding = " px-[20px] "
}: ContainerProps) => {
  return (
    <div
      className={`w-full flex flex-col  items-center justify-center  ${background} ${outerPadding} `}
    >
      <div className={`container flex flex-col items-center max-w-[1400px] ${innerPadding}`}>
        {children}
      </div>
    </div>
  )
}

export default Container
