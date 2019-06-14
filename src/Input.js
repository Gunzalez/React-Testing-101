import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      huh: false
    };
  }

  tryThisGuess(e) {
    e.preventDefalt();
    console.log(e);
  }

  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          className="form-control"
          data-test="input-field"
          placeholder="Go on guess the word then"
          id=""
          value=""
        />
        <button
          className="btn btn-success"
          type="submit"
          data-test="submit-button"
          onClick={e => {
            this.tryThisGuess(e);
          }}
        >
          Submit
        </button>
      </form>
    );
    return (
      <div className="Input" data-test="component-input">
        {content}
      </div>
    );
  }
}

Input.propTypes = {
  success: PropTypes.bool.isRequired
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
