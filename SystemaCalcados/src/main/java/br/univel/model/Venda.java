package br.univel.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "venda")
@XmlRootElement
public class Venda implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   private String Quantidade;

   private String PrecoTotal;

   private String NomeProduto;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Venda))
      {
         return false;
      }
      Venda other = (Venda) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getQuantidade()
   {
      return Quantidade;
   }

   public void setQuantidade(String Quantidade)
   {
      this.Quantidade = Quantidade;
   }

   public String getPrecoTotal()
   {
      return PrecoTotal;
   }

   public void setPrecoTotal(String PrecoTotal)
   {
      this.PrecoTotal = PrecoTotal;
   }

   public String getNomeProduto()
   {
      return NomeProduto;
   }

   public void setNomeProduto(String NomeProduto)
   {
      this.NomeProduto = NomeProduto;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      result += ", version: " + version;
      if (Quantidade != null && !Quantidade.trim().isEmpty())
         result += ", Quantidade: " + Quantidade;
      if (PrecoTotal != null && !PrecoTotal.trim().isEmpty())
         result += ", PrecoTotal: " + PrecoTotal;
      if (NomeProduto != null && !NomeProduto.trim().isEmpty())
         result += ", NomeProduto: " + NomeProduto;
      return result;
   }
}