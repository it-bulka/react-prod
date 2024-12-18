import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = ({ className, children, ...rest }: HStackProps) => {
  return (
    <Flex className={className} direction="row" {...rest}>
      {children}
    </Flex>
  )
}
