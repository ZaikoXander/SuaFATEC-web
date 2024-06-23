export default function CommentsScrollAreaFeedbackMessage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className='w-auto py-3 text-center text-gray-400 sm:w-80'>{children}</p>
  )
}
