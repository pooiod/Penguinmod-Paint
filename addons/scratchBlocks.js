addImageButton(
    '//yeetyourfiles.lol/download/8e6a877c-ac8a-4c92-97e0-2ddad5751b52',
    async () => {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 195, 255, 0.7)';
      overlay.style.zIndex = '9999';

      // Create modal wrapper
      const wrapper = document.createElement('div');
      wrapper.style.position = 'absolute';
      wrapper.style.top = '50%';
      wrapper.style.left = '50%';
      wrapper.style.transform = 'translate(-50%, -50%)';
      wrapper.style.backgroundColor = '#fff';
      wrapper.style.padding = '0px';
      wrapper.style.borderRadius = '8px';
      wrapper.style.width = '400px';
      wrapper.style.border = '4px solid rgba(255, 255, 255, 0.25)';

      // Create title
      const title = document.createElement('h3');
      title.textContent = 'Enter Scratchblocks Code';
      title.style.textAlign = 'center';
      title.style.marginBottom = '20px';
      wrapper.appendChild(title);

      // Create multi-line text input
      const textInput = document.createElement('textarea');
      textInput.placeholder = `when flag clicked :: cat\nrepeat (10)\n  move (5) steps\n  say [I love Penguin Paint!]\nend`;
      textInput.style.width = '100%';
      textInput.style.height = '150px';
      textInput.style.marginBottom = '15px';
      textInput.style.padding = '10px';
      textInput.style.border = '1px solid #ccc';
      textInput.style.borderRadius = '5px';
      textInput.style.resize = 'none';
      wrapper.appendChild(textInput);

      // Create dropdown for style selection
      const styleLabel = document.createElement('label');
      styleLabel.textContent = 'Style:';
      styleLabel.style.display = 'block';
      styleLabel.style.marginBottom = '5px';
      wrapper.appendChild(styleLabel);

      const styleDropdown = document.createElement('select');
      const styles = ['Scratch2', 'Scratch3'];
      styles.forEach(style => {
          const option = document.createElement('option');
          option.value = style;
          option.textContent = style;
          if (style === 'Scratch3') option.selected = true; // Default to Scratch3
          styleDropdown.appendChild(option);
      });
      styleDropdown.style.width = '100%';
      styleDropdown.style.padding = '8px';
      styleDropdown.style.border = '1px solid #ccc';
      styleDropdown.style.borderRadius = '5px';
      styleDropdown.style.marginBottom = '20px';
      wrapper.appendChild(styleDropdown);

      // Create button container
      const buttonContainer = document.createElement('div');
      buttonContainer.style.display = 'flex';
      buttonContainer.style.justifyContent = 'space-between';

      // Create confirm button
      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Generate';
      confirmButton.style.padding = '10px 20px';
      confirmButton.style.backgroundColor = '#28a745';
      confirmButton.style.color = '#fff';
      confirmButton.style.border = 'none';
      confirmButton.style.cursor = 'pointer';
      confirmButton.style.borderRadius = '5px';
      confirmButton.style.transition = 'background-color 0.3s';
      confirmButton.addEventListener('mouseenter', () => {
          confirmButton.style.backgroundColor = '#218838';
      });
      confirmButton.addEventListener('mouseleave', () => {
          confirmButton.style.backgroundColor = '#28a745';
      });
      buttonContainer.appendChild(confirmButton);

      // Create cancel button
      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.style.padding = '10px 20px';
      cancelButton.style.backgroundColor = '#dc3545';
      cancelButton.style.color = '#fff';
      cancelButton.style.border = 'none';
      cancelButton.style.cursor = 'pointer';
      cancelButton.style.borderRadius = '5px';
      cancelButton.style.transition = 'background-color 0.3s';
      cancelButton.addEventListener('mouseenter', () => {
          cancelButton.style.backgroundColor = '#c82333';
      });
      cancelButton.addEventListener('mouseleave', () => {
          cancelButton.style.backgroundColor = '#dc3545';
      });
      buttonContainer.appendChild(cancelButton);

      wrapper.appendChild(buttonContainer);
      overlay.appendChild(wrapper);
      document.body.appendChild(overlay);

      // Event listeners for buttons
      confirmButton.addEventListener('click', () => {
          const scratchCode = textInput.value || textInput.placeholder;
          const selectedStyle = styleDropdown.value;
          document.body.removeChild(overlay);
          console.log('Scratchblocks code:', scratchCode);
          console.log('Selected style:', selectedStyle);
      });

      cancelButton.addEventListener('click', () => {
          document.body.removeChild(overlay);
      });
    }
);
