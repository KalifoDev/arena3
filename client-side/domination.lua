-- -----------------------------------------------------------------------------------------------------------------------------------------
-- -- VARIABLES
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- local Zone
-- local Blip
-- local DoubleZone
-- Player = GetPlayerServerId(PlayerId())
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- -- STATEBAGS
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- AddStateBagChangeHandler('Domination',('player:%s'):format(Player), function(_, _, Value)
--     if Value then
--         SendNUIMessage({
--             action = 'Status',
--             data = { 
--                 remaining = Value["Remains"],
--                 winning = Value["Winning"] or "Nenhum",
--                 points = Value["Points"].."/"..Value["MaxPoints"] 
--             }
--         })
--         SetRunSprintMultiplierForPlayer(PlayerId(),1.15)
--     else
--         SendNUIMessage({
--             action = 'setVisible',
--             data = false
--         })
        
--         SendNUIMessage({
--             action = 'router',
--             data = {
--                 path = "/"
--             }
--         })
--         SetRunSprintMultiplierForPlayer(PlayerId(),1.10)
--         Zone = nil
--         DoubleZone:destroy()
--         PointsZone:destroy()
--     end
-- end)

cityName = GetConvar("cityName", "")

Logos = {
	["Dev-Season3"] = "./assets/images/logo.webp",
    ["Santa"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/santa.png",
	["Grande"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/grande.png",
	["Alexandria"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/alexandria2.png",
	["Maresia"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/maresia.png",
	["Galaxy"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/galaxy.png",
    ["Universo"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/universo.png",
    ["Gaules"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/santa.png",
    ["Fronteira"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/santa.png",
    ["CidadeNobre"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/nobre.png",
    ["Caravelas"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/caravelas2.png",
    ["Kingdom"] = "https://santaimagens.roleplayrp.com/img/imagens_hud/kng.png",
}

DiscordConv = {
	["Santa"] = "discord.gg/cidadesanta",
	["Grande"] = "discord.gg/cgprp",
	["Alexandria"] = "discord.gg/alexandria-rp",
	["Maresia"] = "discord.gg/cidademaresia",
	["Galaxy"] = "discord.gg/galaxy-rp",
    ["Universo"] = "discord.gg/universo-rp",
    ["Gaules"] = "discord.gg/",
    ["Fronteira"] = "discord.gg/fronteirarp",
    ["CidadeNobre"] = "discord.gg/cidadenobre",
    ["Caravelas"] = "discord.gg/caravelas",
    ["Kingdom"] = "discord.gg/kngestate",
}

RegisterNUICallback('GetServerInfos', function(_, cb)
    cb({logo = Logos[cityName], discord = DiscordConv[cityName]})
end)

RegisterNetEvent("domination:KillFeed")
AddEventHandler("domination:KillFeed",function(KillerName,VictimName,Weapon)
    SendNUIMessage({
        action = 'KillFeed',
        data = { 
            killFeed = { 
                victim = VictimName,
                killer = KillerName
            },
            image = Weapon,
        }
    })
end)

AddEventHandler("domination:ExitNui",function()
    SendNUIMessage({
        action = 'setVisible',
        data = false
    })
    
    SendNUIMessage({
        action = 'router',
        data = {
            path = "/"
        }
    })
    TriggerEvent("safezone:remPromo",true)
    TriggerEvent("Notify:Remkey",true)
end)

AddEventHandler("domination:updateNui",function(Table)
    SendNUIMessage({
        action = 'UpdateTeamsScore',
        data = Table["Teams"]
    })

    SendNUIMessage({
        action = 'UpdateSelfTeamScore',
        data = { 
            group = Table["Group"],
            points = Table["Points"],
            players = Table["Remains"]
        }
    })
end)

AddEventHandler("domination:StartNui",function(Table)
    TriggerEvent("safezone:remPromo",true)
    TriggerEvent("Notify:Remkey",false)
    local CountDown = 10
    SendNUIMessage({
        action = 'router',
        data = {
            path = "/DominationProvisional"
        }
    })
    
    SendNUIMessage({
        action = 'setVisible',
        data = true
    })
    
    Wait(1)
    
    CreateThread(function()
        local Ped = PlayerPedId()
        while LocalPlayer["state"]["Domination"] do
            local Health = parseInt(GetEntityHealth(Ped))
            SendNUIMessage({
                action = 'UpdateHealth',
                data = Health
            })
            Wait(250)
        end
    end)

    SendNUIMessage({
        action = 'UpdateCountdown',
        data = CountDown
    })

    Wait(1000)

    while CountDown > 0 do
        CountDown = CountDown - 1
            SendNUIMessage({
                action = 'UpdateCountdown',
                data = CountDown
            })
        Wait(1000)
    end

    SendNUIMessage({
        action = 'UpdateTeamsScore',
        data = Table["Teams"]
    })

    SendNUIMessage({
        action = 'UpdateSelfTeamScore',
        data = { 
            group = Table["Group"],
            points = Table["Points"],
            players = Table["Remains"]
        }
    })
end)

-- RegisterNetEvent("domination:StartDomination")
-- AddEventHandler("domination:StartDomination",function(Info)
--     if LocalPlayer["state"]["Domination"] then
--         local Ped = PlayerPedId()
--         Zone = Info
--         DoubleZone = PolyZone:Create(dominationConfig[Zone]["DoublePoint"],dominationConfig[Zone]["optionsD"])
--         PointsZone = PolyZone:Create(dominationConfig[Zone]["Point"],dominationConfig[Zone]["optionsP"])
--         TriggerEvent("hoverfy:removeHoverfy")
--         SendNUIMessage({
--             action = 'router',
--             data = {
--                 path = "/Domination"
--             }
--         })
        
--         SendNUIMessage({
--             action = 'setVisible',
--             data = true
--         })
        
--         Wait(1)
        
--         SendNUIMessage({
--             action = 'InitMode',
--             data = {
--                 mode = {
--                     mode = LocalPlayer["state"]["Domination"]["Mode"],
--                     name = LocalPlayer["state"]["Domination"]["Group"]
--                 },
--                 initRound = true
--             }
--         })
        
--         FreezeEntityPosition(Ped,true)
--         LocalPlayer["state"]["Invincible"] = true
--         SetEntityInvincible(ped,true)
        
--         Wait(10000)
        
--         SetEntityInvincible(ped,false)
--         LocalPlayer["state"]["Invincible"] = false
--         FreezeEntityPosition(Ped,false)
        
--     end
-- end)
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- -- DEAD EVENT
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- AddEventHandler("gameEventTriggered",function(name,args)
--     if name ~= "CEventNetworkEntityDamage" then
--         return
--     end
--     local Victim = PlayerPedId()
    
--     if args[1] ~= Victim then
--         return
--     end
    
--     if LocalPlayer["state"]["Arena"] then
--         return
--     end
    
--     if not Zone then
--         return
--     end
    
--     local Attacker = tonumber(args[2])
--     local VictimDied = GetEntityHealth(Victim) <= 100
--     local Weapon = tostring(args[7])
--     if VictimDied then
--         if IsEntityAPed(Victim) then
--             if IsPedAPlayer(Attacker) then
--                 local KillerServerId = GetPlayerServerId((NetworkGetPlayerIndexFromPed(Attacker)))
--                 local VictimServerId = GetPlayerServerId(PlayerId())
--                 local KillerCoordinate = GetEntityCoords(Attacker)
--                 vSERVER.killFeed(KillerServerId,VictimServerId,Weapon,DoubleZone:isPointInside(KillerCoordinate))
--             end
--         end
--     end
-- end)