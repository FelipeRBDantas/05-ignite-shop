import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '12px 16px',
  color: '#fff',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)',
  },

  span: {
    fontWeight: 'bold',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
