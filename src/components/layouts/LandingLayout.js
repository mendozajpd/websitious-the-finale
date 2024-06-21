import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const LandingLayout = () => {

    return (
        <div className="d-flex vh-100">
            <Container fluid className='landing-bg h-100 overflow-hidden'>
                <Outlet />
            </Container>
        </div>
    );
}

export default LandingLayout;