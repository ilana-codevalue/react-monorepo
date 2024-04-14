import styles from './textbox.module.css';

/* eslint-disable-next-line */
export interface TextboxProps {}

export function Textbox(props: TextboxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Textbox!</h1>
    </div>
  );
}

export default Textbox;
