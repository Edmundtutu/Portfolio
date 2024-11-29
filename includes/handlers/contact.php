<?php
header('Content-Type: application/json');
error_reporting(0);

// Configuration
$config = [
    'to_email' => 'edmund.tutuma@gmail.com',
    'max_message_length' => 1000,
    'allowed_domains' => ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'] // Add more as needed
];

// Helper functions
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function validateEmail($email, $allowed_domains) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    
    $domain = substr(strrchr($email, "@"), 1);
    return in_array($domain, $allowed_domains);
}

// Process the form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get and sanitize inputs
        $name = sanitizeInput($_POST['name'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $subject = sanitizeInput($_POST['subject'] ?? '');
        $message = sanitizeInput($_POST['message'] ?? '');
        
        // Validation
        $errors = [];
        
        if (empty($name) || strlen($name) < 2 || strlen($name) > 50) {
            $errors[] = 'Name must be between 2 and 50 characters';
        }
        
        if (!validateEmail($email, $config['allowed_domains'])) {
            $errors[] = 'Invalid email address';
        }
        
        if (empty($subject) || strlen($subject) < 2 || strlen($subject) > 100) {
            $errors[] = 'Subject must be between 2 and 100 characters';
        }
        
        if (empty($message) || strlen($message) < 10 || strlen($message) > $config['max_message_length']) {
            $errors[] = 'Message must be between 10 and ' . $config['max_message_length'] . ' characters';
        }
        
        if (!empty($errors)) {
            echo json_encode([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $errors
            ]);
            exit;
        }
        
        // Prepare email
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message:\n$message";
        
        $headers = [
            'From' => $email,
            'Reply-To' => $email,
            'X-Mailer' => 'PHP/' . phpversion()
        ];
        
        // Send email
        if (mail($config['to_email'], "Portfolio Contact: $subject", $email_content, $headers)) {
            echo json_encode([
                'success' => true,
                'message' => 'Message sent successfully'
            ]);
        } else {
            throw new Exception('Failed to send email');
        }
        
    } catch (Exception $e) {
        error_log($e->getMessage());
        echo json_encode([
            'success' => false,
            'message' => 'An error occurred while sending the message'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
