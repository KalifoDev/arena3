
RegisterNetEvent("arena:DisplayFacRank")
AddEventHandler("arena:DisplayFacRank", function(Data,Type,Timeout,Kills)
    SendNUIMessage({
        action = 'displayFacRank',
        data = {
            typeRanking = Type,
            dataRanking = Data,
            timeout = Timeout,
            kills = Kills,
        }
    })
end)

RegisterNetEvent("arena:DisplayRank")
AddEventHandler("arena:DisplayRank", function(Boolean)
    SendNUIMessage({
        action = 'displayRank',
        data = Boolean
    })
end)

RegisterNetEvent("arena:DisplayRankUpdate")
AddEventHandler("arena:DisplayRankUpdate", function(Data, Type, Countdown)
    SendNUIMessage({
        action = 'displayRankUpdate',
        data = {
            typeRanking = Type,
            dataRanking = Data,
            countdown = Countdown,
        }
    })
end)