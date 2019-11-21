import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./InfoButton.css";
import { useSpring, animated as a } from "react-spring";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {Modal} from "react-bootstrap";

type Props = {
	ready: boolean;
}

function InfoButton(props: Props) {
	const [ showModal, setShowModal ] = useState(false);
	const spring = useSpring({
		from: {
			opacity: props.ready ? 1 : 0
		},
		opacity: props.ready ? 1 : 0
	});
	return (
		<React.Fragment>
			<a.div
				className={"info-button"}
				onClick={() => setShowModal(true)}
				style={spring}
			>
				<FontAwesomeIcon icon={faInfo}/>
			</a.div>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Body>

				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
}

export default InfoButton;