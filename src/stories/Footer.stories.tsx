import Footer from '../components/Footer'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default: ComponentStory<typeof Footer> = Template.bind({})
Default.args = {}
Default.storyName = 'デフォルト'
