using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SnackboxAPI.Models;

[NotMapped]
[Keyless]

public class ExecuteResult
{
	public int Result { get; set; }
}
