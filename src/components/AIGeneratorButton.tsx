import styled from "@emotion/styled";
import { Label } from "./Forms";
import { FormGroup } from "./Forms";

// AI Generation Components
const AIGenerateContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  align-items: self-start;
`;

const AIGenerateButton = styled.button<{ disabled?: boolean }>`
  background: rgba(128, 90, 213, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  text-align: left;
  min-width: 250px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    border-color: ${(props) =>
      props.disabled ? "rgba(255, 255, 255, 0.1)" : "#805AD5"};
    background: rgba(128, 90, 213, ${(props) => (props.disabled ? 0.05 : 0.1)});
  }
`;

const AIGenerateIcon = styled.div`
  font-size: 2rem;
  color: #805ad5;
`;

const AIGenerateHint = styled.p`
  color: #a0aec0;
  font-size: 0.875rem;
`;

type AIGeneratorProps = {
  generateAIMetadata: () => void;
  isSubmitting: boolean;
  isGeneratingAI: boolean;
  isDisabled: boolean;
};

// AIGenerator Component
export const AIGenerator = ({
  generateAIMetadata,
  isSubmitting,
  isGeneratingAI,
  isDisabled,
}: AIGeneratorProps) => (
  <FormGroup>
    <Label>Generate with AI</Label>
    <AIGenerateContainer>
      <AIGenerateButton
        type="button"
        onClick={generateAIMetadata}
        disabled={isSubmitting || isGeneratingAI || isDisabled}
      >
        <AIGenerateIcon>✨</AIGenerateIcon>
        {isGeneratingAI
          ? "Generating..."
          : "Generate Random Title & Description"}
      </AIGenerateButton>
      <AIGenerateHint>
        Let Lord Smearington inspire your artistic labeling
      </AIGenerateHint>
    </AIGenerateContainer>
  </FormGroup>
);

export {
  AIGenerateContainer,
  AIGenerateButton,
  AIGenerateIcon,
  AIGenerateHint,
};
