let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((s) => {
        s.classList.add('hidden');
    }
    );

    const stepElement = document.getElementById(`step-${step}`);
    if (stepElement ) {
        stepElement.classList.remove('hidden');
    }
}

function nextStep() {
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}


window.onload = () => showStep(currentStep);