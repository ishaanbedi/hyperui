type Props = {
  componentTitle: string
  componentHash: string
}

function PreviewTitle({ componentTitle, componentHash }: Props) {
  return (
    <h2 className="text-lg font-bold text-black sm:text-xl">
      <a href={`#${componentHash}`} className="relative inline-block group">
        <span
          aria-hidden="true"
          className="hidden group-hover:opacity-25 lg:absolute lg:inset-y-0 lg:-left-6 lg:block lg:opacity-0 lg:transition"
        >
          #
        </span>

        {componentTitle}
      </a>
    </h2>
  )
}

export default PreviewTitle
