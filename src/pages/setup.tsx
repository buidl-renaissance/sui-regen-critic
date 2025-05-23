import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";
import { GetServerSideProps } from "next";
import { UploadMedia } from "@/components/UploadMedia";
import { registerRealm } from "@/lib/realmActions";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      metadata: {
        title: "Setup Your Realm | Lord Smearington's Absurd NFT Gallery",
        description:
          "Create your own realm in the world of NFT art and blockchain creativity.",
        image: "/images/realm-register-banner.jpg",
        url: "https://lord.smearington.theethical.ai/setup",
      },
    },
  };
};

const RealmRegisterPage: React.FC = () => {
  const router = useRouter();
  const wallet = useWallet();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "Lord Smearington's Absurd Gallery",
    description:
      "A Sui Overflow 2025 Hackathon Project – Minted on Sui, Judged by Madness",
    imageUrl:
      "https://lord.smearington.theethical.ai/images/lord-smearington.jpg",
    location: "Russell Industrial Center, Detroit, MI",
    invitationOnly: false,
    requiresVerification: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!wallet.connected) {
      setError("Please connect your wallet to register a realm");
      return;
    }

    if (!formData.name || !formData.description) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // In a real implementation, this would call your contract to register the realm
      // const response = await registerRealm(formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Create a transaction to register the realm
      const result = await registerRealm(wallet, {
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl,
        location: formData.location,
        invitationOnly: formData.invitationOnly,
        requiresVerification: formData.requiresVerification,
        kingdomName: "Lord Smearington's Absurd Gallery",
        guardians: [],
      });

      console.log("Realm registered:", result);

      // Redirect to realms page on success
      router.push("/realm");
    } catch (err) {
      console.error("Error registering realm:", err);
      setError("Failed to register realm. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const RealmSetupForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Realm Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter a unique name for your realm"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description *</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your realm and its purpose"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="imageUrl">Realm Image</Label>
          <UploadMedia
            mediaUrl={formData.imageUrl}
            onUploadComplete={(url: string) =>
              setFormData({ ...formData, imageUrl: url })
            }
            label="Upload an image for your realm"
          />
          <small>Upload an image that represents your realm</small>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Physical or virtual location"
          />
        </FormGroup>

        <FormGroup>
          <Label>Realm Settings</Label>
          <div>
            <input
              type="checkbox"
              id="invitationOnly"
              name="invitationOnly"
              checked={formData.invitationOnly}
              onChange={handleChange}
            />
            <Label htmlFor="invitationOnly" style={{ marginLeft: "0.5rem" }}>
              Invitation Only
            </Label>
          </div>

          <div>
            <input
              type="checkbox"
              id="requiresVerification"
              name="requiresVerification"
              checked={formData.requiresVerification}
              onChange={handleChange}
            />
            <Label
              htmlFor="requiresVerification"
              style={{ marginLeft: "0.5rem" }}
            >
              Requires Handle Verification
            </Label>
          </div>
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register Realm"}
        </Button>
      </Form>
    );
  };

  return (
    <PageWrapper>
      <BackButton>
        <Link href="/">
          <FlexDiv>
            <FaArrowLeft /> Home
          </FlexDiv>
        </Link>
      </BackButton>

      <Container>
        <Title>Setup Your Realm</Title>

        {wallet.connected ? (
          <RealmSetupForm />
        ) : (
          <ConnectWalletMessage>
            <h3>Connect Your Wallet</h3>
            <p>Please connect your wallet to register your realm</p>
            <ConnectButton />
          </ConnectWalletMessage>
        )}
      </Container>
    </PageWrapper>
  );
};

export default RealmRegisterPage;

// Styled components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
  color: #fff;
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(26, 32, 44, 0.8);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #d4af37;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Title = styled.h1`
  font-family: "Cinzel", serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #d4af37;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #d4af37;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #d4af37, #f1c40f);
  color: #1a1a2e;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  font-family: "Cinzel", serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #f1c40f, #d4af37);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const GuardianInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const AddButton = styled.button`
  background: rgba(212, 175, 55, 0.2);
  color: #d4af37;
  border: 1px solid #d4af37;
  border-radius: 6px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.3);
  }
`;

const GuardianList = styled.div`
  margin-top: 1rem;
`;

const GuardianItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;

const RemoveButton = styled.button`
  background: none;
  color: #e74c3c;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #c0392b;
  }
`;

const ConnectWalletMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  button {
    margin-top: 1rem;
  }
`;
