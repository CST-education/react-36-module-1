import { UserMenu } from './UserMenu'
import { Friends } from '../Friends/Friends'
import PropTypes from 'prop-types'
// импорт обычного файла стилей
import { Button } from 'react-bootstrap'
import './User.css'
import s from './User.module.css'
import styled from 'styled-components'
import { Icons } from '../Icons'
// импорт изображения
import img1 from '../../images/img1.jpeg'

const Styles = styled.section`
  .styledBtn {
    background: black;
    color: white;
  }
`

function User({ name, age, friends, myMethod }) {
  console.log(age)
  return (
    <div className={s.wrapper}>
      <ul>
        <li>
          <Icons
            name="hero"
            className="zuzuzu"
            color="blue"
            stroke="black"
            width="64"
            // height="100"
          />
        </li>
        <li>
          <Icons name="instagram-icon" />
        </li>
      </ul>
      {/* <h1>{name}</h1> */}
      {/* <p>{age}</p> */}
      {/* <img src={img1} width="200" alt="" /> */}
      {name ? <h1>{name}</h1> : <p>Имя не передано</p>}
      {age > 18 && age < 32 && <p>Вы еще молоды!</p>}
      <Styles>
        <button className="userBtn styledBtn" type="button" onClick={myMethod}>
          click
        </button>
      </Styles>
      <Button
        // style={{ background: 'yellow' }}
        // className="btn"
        className={s.moduleBtn}
        variant="success"
        id="btn"
      >
        Success
      </Button>
      {/* <Friends friends={friends} /> */}
      <UserMenu />
      <Friends friends={friends}>
        <p>Friends list</p>
        <p>Simple children</p>
        TExt
      </Friends>
    </div>
  )
}

export default User

User.defaultProps = {
  name: 'new User',
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.array.isRequired,
}
