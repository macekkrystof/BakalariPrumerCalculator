using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BakaNet;
using BakaNet.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BakaPrumer.Controllers
{
    [Route("api/[controller]")]
    public class PrumerBakaController : Controller
    {

        [HttpPost("[action]")]
        public async Task<IActionResult> GetPrumery([FromBody]LoginUdaje udaje)
        {
            try
            {
                var client = await BakalariClient.CreateAsync(udaje.BakalariUrl, udaje.Username, udaje.Password);
                var znamky = await client.GetZnamkyAsync();
                return Json(CalculatePrumery(znamky));
            }
            catch (Exception)
            {
                return Json("Něco se nepovedlo. Zkontrolujte prosím správnost zadaných údajů.");
            }
           
        }

        private List<PrumerModel> CalculatePrumery(List<ZnamkyModels.PredmetModel> znamky)
        {
            var prumery = new List<PrumerModel>();
            foreach (var item in znamky)
            {
                var prumer = new PrumerModel();
                double soucet = 0;
                double pocet = 0;
                prumer.Predmet = item.Nazev;
                foreach (var znamka in item.Znamky)
                {
                    if (znamka.Znamka == "?" || znamka.Znamka == "A" || znamka.Znamka == "N" || znamka.Znamka == "U" || znamka.Znamka == "X")
                        continue;
                    try
                    {
                        int vaha = int.Parse(znamka.Vaha);
                        double znamkaNum = 0;
                        if (znamka.Znamka.Contains("-"))
                            znamkaNum = double.Parse(znamka.Znamka.Substring(0, 1)) + 0.5;
                        else
                        znamkaNum = double.Parse(znamka.Znamka);
                        
                        soucet += znamkaNum * vaha;
                        pocet += vaha;
                    }
                    catch (Exception)
                    {
                        continue;
                    }   
                }
                prumer.Prumer = soucet / pocet;
                prumery.Add(prumer);
            }
            return prumery;
        }
    }
}
