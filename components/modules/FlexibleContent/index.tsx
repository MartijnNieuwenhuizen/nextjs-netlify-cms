import type FlexibleContentInterface from './interface'

import LargeText from '../../flexibles/LargeText'
import Text from '../../flexibles/Text'
import TextMedia from '../../flexibles/TextMedia'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.component === 'large-text') {
          return <LargeText key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'text') {
          return <Text key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'text-media') {
          return <TextMedia key={`flexible-content-${index}`} {...section} />
        }

        return null
      })}
    </>
  )
}
