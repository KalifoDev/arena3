lang = GetConvar("language", "pt-br") or "pt-br"
translations = {
    ["en-us"] = {
        ["enterFFA"] = "Enter FFA",
        ["Fuzil"] = "Assault Rifle",
        ["Pistola"] = "Pistol",
        ["enterArena"] = "Enter Arena",
        ["exitArena"] = "Exit",
    },

    ["pt-br"] = {
        ["enterFFA"] = "Entrar em FFA",
        ["Fuzil"] = "Fuzil",
        ["Pistola"] = "Pistola",
        ["enterArena"] = "Entrar na Arena",
        ["exitArena"] = "Sair",
    },

    ["pt-pt"] = {
        ["enterFFA"] = "Entrar em FFA",
        ["Fuzil"] = "Fuzil",
        ["Pistola"] = "Pistola",
        ["enterArena"] = "Entrar na Arena",
        ["exitArena"] = "Sair",
    }
}

---@param key string The translation key to check
---@return boolean Returns true if translation exists, false otherwise
function CheckTranslation(key)
    if translations[lang][key] then
        return true
    else
        print("[DEBUG] Translation not found for key: " .. key.. " - Lang: " .. lang)
        return false
    end
end

---@param key string The translation key to retrieve
---@return string Returns the translated string or error message
function _t(key)
    if CheckTranslation(key) then
        return translations[lang][key]
    else
        return "Translation not found for key: " .. key.. " - Lang: " .. lang
    end
end