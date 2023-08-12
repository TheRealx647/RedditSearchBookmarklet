javascript:(function() {
    function createPopup() {
        var popup = document.createElement("div");
        popup.classList.add("custom-popup-style");
        popup.style.all = "initial";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "9999";
        popup.style.backgroundColor = "#fff";
        popup.style.border = "5px solid #FF4500";
        popup.style.padding = "20px";
        popup.style.width = "400px";
        popup.style.fontFamily = "Arial, sans-serif";
        popup.style.boxSizing = "border-box";
        popup.style.color = "#000000";

        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            background-color: #fff;
            border: 5px solid #FF4500;
            padding: 20px;
            width: 400px;
            font-family: Arial, sans-serif;
            box-sizing: border-box;
        `;
        
        var titleBar = document.createElement("div");
        titleBar.style.backgroundColor = "#FF4500";
        titleBar.style.color = "#fff";
        titleBar.style.padding = "5px";
        titleBar.style.borderRadius = "0px 0px 0 0";
        titleBar.style.textAlign = "center";
        titleBar.style.marginBottom = "20px";
        titleBar.innerHTML = "<h2 style='margin: 0; font-size: 18px;'>Reddit Search:</h2>";
        popup.appendChild(titleBar);

        var closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.style.backgroundColor = "transparent";
        closeButton.style.border = "none";
        closeButton.style.color = "#fff";
        closeButton.style.fontSize = "15px";
        closeButton.style.margin = "10px 10px 0 0";
        closeButton.style.cursor = "pointer";
        closeButton.style.position = "absolute";
        closeButton.style.top = "14px";
        closeButton.style.right = "20px";
        closeButton.addEventListener("click", function() {
            document.body.removeChild(popup);
        });
        titleBar.appendChild(closeButton);

        function createLabel(text) {
            var label = document.createElement("label");
            label.textContent = text;
            label.style.display = "block";
            label.style.marginBottom = "10px";
            return label;
        }

        function createCheckboxWithLabel(text, checkbox) {
            var label = document.createElement("label");
            label.style.display = "block";
            label.style.marginBottom = "10px";

            var checkboxInput = document.createElement("input");
            checkboxInput.type = "checkbox";
            checkboxInput.checked = checkbox;
            label.appendChild(checkboxInput);

            var labelText = document.createTextNode(text);
            label.appendChild(labelText);

            return label;
        }

        popup.appendChild(createLabel("Search Keyword / Phrase:"));

        var searchTextBox = document.createElement("input");
        searchTextBox.type = "text";
        searchTextBox.style.width = "100%";
        searchTextBox.style.height = "26px";
        searchTextBox.style.fontSize = "16px";
        searchTextBox.style.marginBottom = "14px";
        searchTextBox.style.border = "1px solid #FF4500";
        popup.appendChild(searchTextBox);

        var usernameLabel = createLabel("Content by author/username (optional):");
        usernameLabel.style.fontSize = "14px";
        usernameLabel.style.marginBottom = "8px";
        popup.appendChild(usernameLabel);

        var usernameTextBox = document.createElement("input");
        usernameTextBox.type = "text";
        usernameTextBox.style.width = "70%";
        usernameTextBox.style.height = "24px";
        usernameTextBox.style.fontSize = "14px";
        usernameTextBox.style.marginBottom = "14px";
        usernameTextBox.style.backgroundColor = "#FFFFFF";
        usernameTextBox.style.border = "1px solid #FF4500";
        popup.appendChild(usernameTextBox);

        var subredditLabel = createLabel("Subreddit (optional):");
        subredditLabel.style.fontSize = "14px";
        subredditLabel.style.marginBottom = "8px";
        popup.appendChild(subredditLabel);

        var subredditTextBox = document.createElement("input");
        subredditTextBox.type = "text";
        subredditTextBox.style.width = "70%";
        subredditTextBox.style.height = "24px";
        subredditTextBox.style.fontSize = "14px";
        subredditTextBox.style.marginBottom = "14px";
        subredditTextBox.style.backgroundColor = "#FFFFFF";
        subredditTextBox.style.border = "1px solid #FF4500";
        popup.appendChild(subredditTextBox);

        var userCheckboxLabel = createCheckboxWithLabel(" Limit search to finding u/Usernames", false);
        popup.appendChild(userCheckboxLabel);
        userCheckboxLabel.style.marginBottom = "10px";

        var commentCheckboxLabel = createCheckboxWithLabel(" Search comments only", false);
        popup.appendChild(commentCheckboxLabel);
        commentCheckboxLabel.style.marginBottom = "10px";

 
        var imagesCheckboxLabel = createCheckboxWithLabel(" Search Reddit hosted images only", false);
        popup.appendChild(imagesCheckboxLabel);
        imagesCheckboxLabel.style.marginBottom = "10px";

        var galleryCheckboxLabel = createCheckboxWithLabel(" Search Galleries Only \(alt search for images\)", false);
        popup.appendChild(galleryCheckboxLabel);
        galleryCheckboxLabel.style.marginBottom = "10px";

        var rhostvidsCheckboxLabel = createCheckboxWithLabel(" Search Reddit hosted videos only", false);
        popup.appendChild(rhostvidsCheckboxLabel);
        rhostvidsCheckboxLabel.style.marginBottom = "14px";

        var sortingLabel = createLabel("Sort By:");
        sortingLabel.style.fontSize = "14px";
        sortingLabel.style.marginBottom = "8px";
        popup.appendChild(sortingLabel);

        var sortingDropdown = document.createElement("select");
        sortingDropdown.style.width = "50%";
        sortingDropdown.style.height = "25px";
        sortingDropdown.style.fontSize = "14px";
        sortingDropdown.style.marginBottom = "20px";
        sortingDropdown.style.border = "1px solid #FF4500";
        popup.appendChild(sortingDropdown);

        var sortingOptions = ["Relevant", "Top", "New"];
        var sortingValues = ["relevant", "top", "new"];

        for (var i = 0; i < sortingOptions.length; i++) {
            var option = document.createElement("option");
            option.value = sortingValues[i];
            option.textContent = sortingOptions[i];
            sortingDropdown.appendChild(option);
        }

        var buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.justifyContent = "space-between";
        popup.appendChild(buttonContainer);

        var searchButton = document.createElement("button");
        searchButton.textContent = "SEARCH";
        searchButton.style.backgroundColor = "#4CAF50";
        searchButton.style.border = "none";
        searchButton.style.color = "white";
        searchButton.style.padding = "10px 20px";
        searchButton.style.textDecoration = "none";
        searchButton.style.cursor = "pointer";
        searchButton.style.marginBottom = "10px";
        buttonContainer.appendChild(searchButton);

        var tabsearchButton = document.createElement("button");
        tabsearchButton.textContent = "SEARCH +TAB";
        tabsearchButton.style.backgroundColor = "#6ea9b5";
        tabsearchButton.style.border = "none";
        tabsearchButton.style.color = "white";
        tabsearchButton.style.padding = "10px 20px";
        tabsearchButton.style.textDecoration = "none";
        tabsearchButton.style.cursor = "pointer";
        tabsearchButton.style.marginBottom = "10px";
        tabsearchButton.addEventListener("click", function() {
            document.body.removeChild(popup);
        });
        buttonContainer.appendChild(tabsearchButton);

        var closeButton = document.createElement("button");
        closeButton.textContent = "CLOSE";
        closeButton.style.backgroundColor = "#f44336";
        closeButton.style.border = "none";
        closeButton.style.color = "white";
        closeButton.style.padding = "10px 20px";
        closeButton.style.textDecoration = "none";
        closeButton.style.cursor = "pointer";
        closeButton.style.marginBottom = "10px";
        closeButton.addEventListener("click", function() {
            document.body.removeChild(popup);
        });
        buttonContainer.appendChild(closeButton);

        var nsfwNote = document.createElement("p");
        nsfwNote.textContent = "NSFW CONTENT & SAFE SEARCH SETTINGS CAN ONLY BE CHANGED ON REDDIT.COM";
        nsfwNote.style.fontSize = "8px";
        nsfwNote.style.marginTop = "10px";
        nsfwNote.style.textAlign = "center";
        popup.appendChild(nsfwNote);

        function toggleCheckboxes(disable) {
            usernameTextBox.disabled = disable;
            subredditTextBox.disabled = disable;
            commentCheckboxLabel.querySelector("input").disabled = disable;
            rhostvidsCheckboxLabel.querySelector("input").disabled = disable;
            imagesCheckboxLabel.querySelector("input").disabled = disable;
            galleryCheckboxLabel.querySelector("input").disabled = disable;
            sortingDropdown.disabled = disable;
        }
        
        userCheckboxLabel.querySelector("input").addEventListener("change", function() {
            var isUserOnly = userCheckboxLabel.querySelector("input").checked;
            if (isUserOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                rhostvidsCheckboxLabel.querySelector("input").checked = false;
                imagesCheckboxLabel.querySelector("input").checked = false;
                galleryCheckboxLabel.querySelector("input").checked = false;
            }
            toggleCheckboxes(isUserOnly);
        });

        var userCheckboxInput = userCheckboxLabel.querySelector("input");
        userCheckboxInput.addEventListener("change", function() {
            var isUserOnly = userCheckboxInput.checked;
            commentCheckboxLabel.style.color = "#000000";
            usernameTextBox.style.backgroundColor = "#FFFFFF";
            usernameLabel.style.color = "#000000";
            subredditTextBox.style.backgroundColor = "#FFFFFF";
            subredditLabel.style.color = "#000000";
            rhostvidsCheckboxLabel.style.color = "#000000";
                imagesCheckboxLabel.querySelector("input").checked = false;
                imagesCheckboxLabel.style.color = "#000000";
                galleryCheckboxLabel.querySelector("input").checked = false;
                galleryCheckboxLabel.style.color = "#000000";
            if (isUserOnly) {

                commentCheckboxLabel.style.color = "#AAAFB4";
                usernameTextBox.value = "";
                usernameTextBox.style.backgroundColor = "#AAAFB4";
                usernameLabel.style.color = "#AAAFB4";
                subredditTextBox.value = "";
                subredditTextBox.style.backgroundColor = "#AAAFB4";
                subredditLabel.style.color = "#AAAFB4";
                rhostvidsCheckboxLabel.style.color = "#AAAFB4";
                imagesCheckboxLabel.style.color = "#AAAFB4";
                galleryCheckboxLabel.style.color = "#AAAFB4";
                
            }
            toggleCheckboxes(isUserOnly);
        });

        commentCheckboxLabel.querySelector("input").addEventListener("change", function() {
            var isCommentOnly = commentCheckboxLabel.querySelector("input").checked;
            if (isCommentOnly) {
                userCheckboxLabel.querySelector("input").disabled = true;
                userCheckboxLabel.style.color = "#AAAFB4";
                rhostvidsCheckboxLabel.querySelector("input").disabled = true;
                rhostvidsCheckboxLabel.style.color = "#AAAFB4";
                imagesCheckboxLabel.querySelector("input").disabled = true;
                imagesCheckboxLabel.style.color = "#AAAFB4";
                galleryCheckboxLabel.querySelector("input").disabled = true;
                galleryCheckboxLabel.style.color = "#AAAFB4";
            } else {
                userCheckboxLabel.querySelector("input").disabled = false;
                userCheckboxLabel.style.color = "#000000";
                rhostvidsCheckboxLabel.querySelector("input").disabled = false;
                rhostvidsCheckboxLabel.style.color = "#000000";
                imagesCheckboxLabel.querySelector("input").disabled = false;
                imagesCheckboxLabel.style.color = "#000000";
                galleryCheckboxLabel.querySelector("input").disabled = false;
                galleryCheckboxLabel.style.color = "#000000";
            }
        });

        function rvidtoggleCheckboxes(disable) {
            commentCheckboxLabel.querySelector("input").disabled = disable;
            userCheckboxLabel.querySelector("input").disabled = disable;
            imagesCheckboxLabel.querySelector("input").disabled = disable;
            galleryCheckboxLabel.querySelector("input").disabled = disable;
        }

        rhostvidsCheckboxLabel.querySelector("input").addEventListener("change", function() {
            var isRvideoOnly = rhostvidsCheckboxLabel.querySelector("input").checked;
            if (isRvideoOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.querySelector("input").checked = false;
            }
            rvidtoggleCheckboxes(isRvideoOnly);
        });

        var rhostvidsCheckboxInput = rhostvidsCheckboxLabel.querySelector("input");
        rhostvidsCheckboxInput.addEventListener("change", function() {
            var isRvideoOnly = rhostvidsCheckboxInput.checked;
            commentCheckboxLabel.style.color = "#000000";
            userCheckboxLabel.style.color = "#000000";
            usernameTextBox.style.backgroundColor = "#FFFFFF";
            usernameLabel.style.color = "#000000";
            galleryCheckboxLabel.style.color = "#000000";
            imagesCheckboxLabel.style.color = "#000000";
            subredditTextBox.style.backgroundColor = "#FFFFFF";
            subredditLabel.style.color = "#000000";
            if (isRvideoOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                commentCheckboxLabel.style.color = "#AAAFB4";
                userCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.style.color = "#AAAFB4";
                imagesCheckboxLabel.querySelector("input").checked = false;
                imagesCheckboxLabel.style.color = "#AAAFB4";
                galleryCheckboxLabel.querySelector("input").checked = false;
                galleryCheckboxLabel.style.color = "#AAAFB4";
            }
            rvidtoggleCheckboxes(isRvideoOnly);
        });


        function imagesonlytoggleCheckboxes(disable) {
            commentCheckboxLabel.querySelector("input").disabled = disable;
            userCheckboxLabel.querySelector("input").disabled = disable;
            rhostvidsCheckboxLabel.querySelector("input").disabled = disable;
            galleryCheckboxLabel.querySelector("input").disabled = disable;
        }

        imagesCheckboxLabel.querySelector("input").addEventListener("change", function() {
            var isImagesOnly = imagesCheckboxLabel.querySelector("input").checked;
            if (isImagesOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.querySelector("input").checked = false;
            }
            imagesonlytoggleCheckboxes(isImagesOnly);
        });

        var imagesCheckboxInput = imagesCheckboxLabel.querySelector("input");
        imagesCheckboxInput.addEventListener("change", function() {
            var isImagesOnly = imagesCheckboxInput.checked;
            commentCheckboxLabel.style.color = "#000000";
            userCheckboxLabel.style.color = "#000000";
            galleryCheckboxLabel.style.color = "#000000";
            usernameTextBox.style.backgroundColor = "#FFFFFF";
            usernameLabel.style.color = "#000000";
            subredditTextBox.style.backgroundColor = "#FFFFFF";
            subredditLabel.style.color = "#000000";
            rhostvidsCheckboxLabel.style.color = "#000000";
            if (isImagesOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                commentCheckboxLabel.style.color = "#AAAFB4";
                userCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.style.color = "#AAAFB4";
                galleryCheckboxLabel.querySelector("input").checked = false;
                galleryCheckboxLabel.style.color = "#AAAFB4";
                rhostvidsCheckboxLabel.querySelector("input").checked = false;
                rhostvidsCheckboxLabel.style.color = "#AAAFB4";
            }
            imagesonlytoggleCheckboxes(isImagesOnly);
        });


         function galleryonlytoggleCheckboxes(disable) {
            commentCheckboxLabel.querySelector("input").disabled = disable;
            userCheckboxLabel.querySelector("input").disabled = disable;
            rhostvidsCheckboxLabel.querySelector("input").disabled = disable;
            imagesCheckboxLabel.querySelector("input").disabled = disable;
        }

        galleryCheckboxLabel.querySelector("input").addEventListener("change", function() {
            var isGalleryOnly = galleryCheckboxLabel.querySelector("input").checked;
            if (isGalleryOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.querySelector("input").checked = false;
            }
            galleryonlytoggleCheckboxes(isGalleryOnly);
        });

        var galleryCheckboxInput = galleryCheckboxLabel.querySelector("input");
        galleryCheckboxInput.addEventListener("change", function() {
            var isGalleryOnly = galleryCheckboxInput.checked;
            commentCheckboxLabel.style.color = "#000000";
            userCheckboxLabel.style.color = "#000000";
            imagesCheckboxLabel.style.color = "#000000";
            usernameTextBox.style.backgroundColor = "#FFFFFF";
            usernameLabel.style.color = "#000000";
            subredditTextBox.style.backgroundColor = "#FFFFFF";
            subredditLabel.style.color = "#000000";
            rhostvidsCheckboxLabel.style.color = "#000000";
            if (isGalleryOnly) {
                commentCheckboxLabel.querySelector("input").checked = false;
                commentCheckboxLabel.style.color = "#AAAFB4";
                userCheckboxLabel.querySelector("input").checked = false;
                userCheckboxLabel.style.color = "#AAAFB4";
                imagesCheckboxLabel.querySelector("input").checked = false;
                imagesCheckboxLabel.style.color = "#AAAFB4";
                rhostvidsCheckboxLabel.querySelector("input").checked = false;
                rhostvidsCheckboxLabel.style.color = "#AAAFB4";
            }
            galleryonlytoggleCheckboxes(isGalleryOnly);
        });


        searchButton.addEventListener("click", function() {
            var search = searchTextBox.value.trim();
            var username = usernameTextBox.value.trim() !== "" ? "+author:" + usernameTextBox.value.trim().replace(/^u\//i, "") : "";
            var subreddit = subredditTextBox.value.trim() !== "" ? " subreddit:" + subredditTextBox.value.trim().replace(/^r\//i, "") : "";
            var images = imagesCheckboxLabel.querySelector("input").checked ? " site:i.redd.it" : "";
            var gallery = galleryCheckboxLabel.querySelector("input").checked ? " url:reddit.com/gallery" : "";
            var rhostvids = rhostvidsCheckboxLabel.querySelector("input").checked ? " site:v.redd.it" : "";
            var user = userCheckboxLabel.querySelector("input").checked ? "&type=user" : "";
            var comment = commentCheckboxLabel.querySelector("input").checked ? "&type=comment" : "";
            var sort = "&sort=" + sortingDropdown.value;
            
            var queryParams = [search, username, subreddit, images, gallery, rhostvids, user, comment, sort].filter(Boolean).join("");
            var url = "https://www.reddit.com/search?q=" + queryParams;
            window.location.href = url;
        });

        tabsearchButton.addEventListener("click", function() {
            var search = searchTextBox.value.trim();
            var username = usernameTextBox.value.trim() !== "" ? "+author:" + usernameTextBox.value.trim().replace(/^u\//i, "") : "";
            var subreddit = subredditTextBox.value.trim() !== "" ? " subreddit:" + subredditTextBox.value.trim().replace(/^r\//i, "") : "";
            var images = imagesCheckboxLabel.querySelector("input").checked ? " site:i.redd.it" : "";
            var gallery = galleryCheckboxLabel.querySelector("input").checked ? " url:reddit.com/gallery" : "";
            var rhostvids = rhostvidsCheckboxLabel.querySelector("input").checked ? " site:v.redd.it" : "";
            var user = userCheckboxLabel.querySelector("input").checked ? "&type=user" : "";
            var comment = commentCheckboxLabel.querySelector("input").checked ? "&type=comment" : "";
            var sort = "&sort=" + sortingDropdown.value;
            
            var tabqueryParams = [search, username, subreddit, images, gallery, rhostvids, user, comment, sort].filter(Boolean).join("");
            var url = "https://www.reddit.com/search?q=" + tabqueryParams;
            window.open(url, "_blank");
        });


        document.body.appendChild(popup);
    }

    createPopup();

    var customStyles = document.createElement("style");
    customStyles.textContent = `
        .custom-popup-style {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            background-color: #fff;
            border: 5px solid #FF4500;
            padding: 20px;
            width: 400px;
            font-family: Arial, sans-serif;
            box-sizing: border-box;
            color: #000000;
        }
    `;
    document.head.appendChild(customStyles);
})();
