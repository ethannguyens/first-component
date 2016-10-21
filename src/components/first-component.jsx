import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../styles/first-component.css";
import messages from "../lang/default-messages";

export default class FirstComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

FirstComponent.displayName = "FirstComponent";

FirstComponent.propTypes = {};

FirstComponent.defaultProps = {};
