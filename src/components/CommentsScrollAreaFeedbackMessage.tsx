export function CommentsScrollAreaFeedbackMessage({
  loadingComments,
  noComments,
}: {
  loadingComments: boolean
  noComments: boolean
}) {
  return (
    <p className='w-auto py-3 text-center text-gray-400 sm:w-80'>
      {loadingComments
        ? 'Carregando comentários...'
        : noComments
          ? 'Ainda não há comentários 🗨️.'
          : undefined}
    </p>
  )
}
