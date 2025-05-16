import React, { createContext, useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // Dummy login/signup logic
  const login = ({ email, password }) => {
    setUser({ email });
    setShowLogin(false);
  };

  const signup = ({ email, password }) => {
    setUser({ email });
    setShowSignup(false);
  };

  const logout = () => {
    setUser(null);
    setShowLogout(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      setShowLogin,
      setShowSignup,
      setShowLogout,
    }}>
      {children}

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton><Modal.Title>Login</Modal.Title></Modal.Header>
        <Modal.Body>
          <AuthForm
            onSubmit={login}
            buttonText="Login"
            alternateText="Don't have an account? Sign up"
            onAlternate={() => { setShowLogin(false); setShowSignup(true); }}
          />
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)}>
        <Modal.Header closeButton><Modal.Title>Sign Up</Modal.Title></Modal.Header>
        <Modal.Body>
          <AuthForm
            onSubmit={signup}
            buttonText="Sign Up"
            alternateText="Already have an account? Login"
            onAlternate={() => { setShowSignup(false); setShowLogin(true); }}
          />
        </Modal.Body>
      </Modal>

      {/* Logout Confirm Modal */}
      <Modal show={showLogout} onHide={() => setShowLogout(false)}>
        <Modal.Header closeButton><Modal.Title>Logout</Modal.Title></Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogout(false)}>Cancel</Button>
          <Button variant="danger" onClick={logout}>Logout</Button>
        </Modal.Footer>
      </Modal>
    </AuthContext.Provider>
  );
}

// Reusable Auth Form
function AuthForm({ onSubmit, buttonText, alternateText, onAlternate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form onSubmit={e => { e.preventDefault(); onSubmit({ email, password }); }}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email" required value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password" required value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100 mb-2">{buttonText}</Button>
      <div style={{ textAlign: "center" }}>
        <Button variant="link" onClick={onAlternate}>{alternateText}</Button>
      </div>
    </Form>
  );
}