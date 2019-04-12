import styles from './index.css';
import classnames from 'classnames'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
