import Link from 'next/link'

import { ComponentCard as iComponentCard } from '@/interface/component'
import { transformComponentSlug } from '@/utils/componentHelpers'

type Props = {
  componentData: iComponentCard
  categoryTitle: string
}

function ComponentCard({ componentData, categoryTitle }: Props) {
  const trueComponentSlug = transformComponentSlug(
    componentData.slug,
    componentData.category
  )

  const componentCountPluralize =
    componentData.count > 1 ? 'Components' : 'Component'

  const componentCount = `${componentData.count} ${componentCountPluralize}`

  return (
    <Link href={`/components/${componentData.category}/${trueComponentSlug}`}>
      <a
        title={`Tailwind CSS ${categoryTitle} Components - ${componentData.title}`}
        className="relative block h-full bg-white group before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
      >
        <div className="transition bg-white border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-6">
            <span className="text-xl" role="img" aria-hidden="true">
              {componentData.emoji}
            </span>

            <p className="mt-4 text-lg font-medium">{componentData.title}</p>

            <p className="mt-1 text-xs">{componentCount}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ComponentCard
