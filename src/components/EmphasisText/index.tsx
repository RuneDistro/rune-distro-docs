import { tv, VariantProps } from 'tailwind-variants'
import { HiLightBulb, HiOutlineThumbUp } from 'react-icons/hi'
import { PiWarningCircle } from 'react-icons/pi'

const container = tv({
  base: "w-full my-4 px-3 pt-3 pb-1 rounded-lg outline outline-1",
  variants: {
    contentStyle: {
      "tool-tip": "bg-dark-blue outline-blue",
      "good-to-know": "bg-dark-green outline-green",
      "warning": "bg-dark-red outline-red",
    },
  },
  defaultVariants: {
    contentStyle: "tool-tip",
  }
})

const icon = tv({
  base: "w-fit flex items-start justify-center m-0 p-1 rounded-full bg-white bg-opacity-10",
  variants: {
    contentStyle: {
      "tool-tip": "text-blue",
      "good-to-know": "text-green",
      "warning": "text-red",
    },
  },
  defaultVariants: {
    contentStyle: "tool-tip",
  }
})

interface EmphasisTextProps extends VariantProps<typeof container> {
  description: string
}

export function EmphasisText({ description, contentStyle }: EmphasisTextProps) {
  return (
    <div className={container({ contentStyle })} >
      <div className='flex items-center gap-1'>
        <div className={icon({ contentStyle })}>
          {contentStyle === "tool-tip" ? (
            <HiLightBulb size={18} />
          ) : contentStyle === "good-to-know" ? (
            <HiOutlineThumbUp size={18} />
          ) : (
            <PiWarningCircle size={18} />
          )}
        </div>

        <h2 className="text-base font-semibold m-0">
          {contentStyle === "tool-tip" ? "Dica" : contentStyle === "good-to-know" ? "Bom saber" : "Atenção"}
        </h2>
      </div>

      <p className='mt-3 text-sm font-medium'>{description}</p>
    </div>
  )
}