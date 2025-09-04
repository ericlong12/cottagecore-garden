
export default function TeaStars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating)
  return (
    <span aria-label={`${rating} out of 5 stars`}>
      {stars.map((on, i) => (
        <span key={i}>{on ? '★' : '☆'}</span>
      ))}
    </span>
  )
}
