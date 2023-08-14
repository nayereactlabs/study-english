import { CenterContainer } from 'components/layout/center-container'

export const DemoCard = () => (
  <CenterContainer>
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Adios!</h2>
        <p>Hola</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </CenterContainer>
)
