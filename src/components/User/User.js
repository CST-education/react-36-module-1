import { UserMenu } from './UserMenu'
import { Friends } from '../Friends/Friends'
import PropTypes from 'prop-types'
function User({ name, age, friends, myMethod }) {
  console.log(age)
  return (
    <>
      {/* <h1>{name}</h1> */}
      {/* <p>{age}</p> */}
      {name ? <h1>{name}</h1> : <p>Имя не передано</p>}
      {age > 18 && age < 32 && <p>Вы еще молоды!</p>}
      <button type="button" onClick={myMethod}>
        click
      </button>
      {/* <Friends friends={friends} /> */}
      <UserMenu />
      <Friends friends={friends}>
        <p>Friends list</p>
        <p>Simple children</p>
        TExt
      </Friends>
    </>
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
