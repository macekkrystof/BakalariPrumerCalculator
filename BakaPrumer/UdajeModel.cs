using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BakaPrumer
{
    public class LoginUdaje
    {
        [JsonProperty("username")]
        public string Username { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
        [JsonProperty("bakalariUrl")]
        public string BakalariUrl { get; set; }
    }
}
