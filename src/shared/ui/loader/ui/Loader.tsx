import cls from './Loader.module.scss'

export function Loader() {
  return (
    <div className={cls.loader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
  )
}