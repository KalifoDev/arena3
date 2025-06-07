local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")

vRP = Proxy.getInterface("vRP")

arena = {}
Tunnel.bindInterface("arena", arena)

-- Active arenas information
local arenas = {}
local playerArena = {}

local playersByRoute = {}

local function ensureArena(aType, id)
    arenas[aType] = arenas[aType] or {}
    arenas[aType][id] = arenas[aType][id] or { Players = {}, Max = 0 }
    return arenas[aType][id]
end

function arena.CheckEnter(route, number)
    local source = source
    if playerArena[source] then
        return false
    end
    return true
end

function arena.GetArena(aType, id)
    local data = ensureArena(aType, id)
    return data
end

function arena.GetArenaInfo()
    return arenas
end

function arena.EnterArena(aType, id, team)
    local src = source
    local data = ensureArena(aType, id)
    data.Players[team] = data.Players[team] or {}
    data.Players[team][src] = true
    playerArena[src] = { type = aType, id = id, team = team }

    local state = Player(src).state
    state:set("Arena", { Arena = aType, Number = id, Team = team, Kills = 0 }, true)

    return true
end

function arena.ExitArena(aType, id)
    local src = source
    if playerArena[src] then
        local data = arenas[playerArena[src].type] and arenas[playerArena[src].type][playerArena[src].id]
        if data then
            for t,players in pairs(data.Players) do
                players[src] = nil
            end
        end
        playerArena[src] = nil
    end
    Player(src).state:set("Arena", nil, true)
end

-- Events used by the client to update player counters
RegisterNetEvent("arena:Players", function(action, route)
    if not route then return end
    if action == "+" then
        playersByRoute[route] = (playersByRoute[route] or 0) + 1
    else
        playersByRoute[route] = math.max((playersByRoute[route] or 1) - 1, 0)
    end
    TriggerClientEvent("arena:Players", -1, route, playersByRoute[route])
end)

RegisterNetEvent("arena:Active", function(arenaType)
    local src = source
    Player(src).state:set("Arena", nil, true)
    playerArena[src] = nil
end)

RegisterNetEvent("arena:Death", function()
    -- Simple stub for death event. Increase kill streak if needed in the future.
end)

-- GunGame stub handlers
local gunGames = {}
function arena.EnterGunGame()
    local src = source
    gunGames[src] = true
    Player(src).state:set("GunGame", { Game = true, Weapon = 1 }, true)
end

function arena.ExitGungame()
    local src = source
    gunGames[src] = nil
    Player(src).state:set("GunGame", nil, true)
end
