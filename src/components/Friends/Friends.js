import PropTypes from 'prop-types'
import { v4 as zzz } from 'uuid'
// импорт модульного файла стилей
import s from './Friends.module.scss'

export function Friends({ friends, children }) {
  console.log(zzz())
  return (
    <>
      <h2>{children}</h2>
      <ul>
        {friends.length > 0 &&
          friends.map((friend) => {
            return (
              <li key={friend.id}>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
                <button className={s.userBtn} type="button">
                  click
                </button>
              </li>
            )
          })}
      </ul>
    </>
  )
}
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  children: PropTypes.any,
}
