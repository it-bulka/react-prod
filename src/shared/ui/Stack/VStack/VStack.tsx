import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = ({ className, children, ...rest }: VStackProps) => {
  return (
    <Flex className={className} direction="column" {...rest}>
      {children}
    </Flex>
  )
}
