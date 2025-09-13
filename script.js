document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');
    const repoUrlInput = document.getElementById('repo-url');
    const apiKeyInput = document.getElementById('api-key');
    const outputArea = document.getElementById('output-area');
    const loading = document.getElementById('loading');
    
    const exampleRepoData = {
        name: 'example-repo',
        full_name: 'username/example-repo',
        description: 'An example repository for demonstrating the README generator',
        html_url: 'https://github.com/username/example-repo',
        owner: {
            login: 'username',
            html_url: 'https://github.com/username'
        },
        stargazers_count: 42,
        forks_count: 7,
        open_issues_count: 3,
        license: {
            name: 'MIT License'
        },
        created_at: '2023-01-15T10:30:00Z',
        updated_at: '2023-09-08T14:45:00Z'
    };
    
    const exampleReadmeContent = `Example Repository-
    Love this project? Give it a star!! ⭐ Want to make it better?? Fork it! 🍴  

![GitHub stars](https://img.shields.io/github/stars/username/example-repo?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/username/example-repo?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/username/example-repo?style=for-the-badge)
![License](https://img.shields.io/github/license/username/example-repo?style=for-the-badge)

Welcome to our example repository! We've packed it with features to help you get started quickly.

## ✨ What Makes This Special-

We built this to be simple, effective, and a joy to use. Here’s what you can expect:
Feature one: A clear, straightforward description of the first awesome thing this does.
Feature two: Details on the second feature that will make your life easier.
Feature three: An explanation of the third feature that sets this project apart.

## 🚀 Installation-

\`\`\`bash
git clone https://github.com/username/example-repo.git
cd example-repo
npm install
\`\`\`

## 📖 How to Use It-

Using the project is a breeze. Here's a quick example to get you going:
Import the module
const example = require('example-repo');

Start doing amazing things!
example.doSomething();

## 🤝 Contributing-

We believe that the best projects are built together. We'd love for you to be a part of this one!
Found a bug? Or perhaps you have a great idea for a new feature? Let us know by opening an issue.
Feel like contributing code? Please feel free to fork the repo and submit a pull request. All contributions are greatly appreciated!

## 📝 License-

This project is open source and available under the generous MIT License. This means you can freely use, modify, and distribute it.
Copyright © 2023 Your Name.
`;
    

    generateBtn.addEventListener('click', function() {
        const repoUrl = repoUrlInput.value.trim();
        
        if (!repoUrl) {
            alert('Please enter a GitHub repository URL');
            return;
        }
        

        loading.style.display = 'block';
        outputArea.innerHTML = '';
        
 
        setTimeout(() => {
         
            loading.style.display = 'none';
            
           
            outputArea.textContent = exampleReadmeContent;
        }, 2000);
    });
    

    copyBtn.addEventListener('click', function() {
        const text = outputArea.textContent;
        
        if (!text || text.includes('Your generated README will appear here')) {
            alert('No README content to copy');
            return;
        }
        
        navigator.clipboard.writeText(text)
            .then(() => {
                // Provide visual feedback
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy text to clipboard');
            });
    });
    
  
    downloadBtn.addEventListener('click', function() {
        const text = outputArea.textContent;
        
        if (!text || text.includes('Your generated README will appear here')) {
            alert('No README content to download');
            return;
        }
        
        const blob = new Blob([text], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'README.md';
        document.body.appendChild(a);
        a.click();
        
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    });
    

    repoUrlInput.value = 'https://github.com/username/example-repo';
});