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

@Entity
@Table(name = "produto")
public class Produto implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   private String Nome;

   private String Descricao;

   private String Quantidade;

   private String Preco;

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
      if (!(obj instanceof Produto))
      {
         return false;
      }
      Produto other = (Produto) obj;
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

   public String getNome()
   {
      return Nome;
   }

   public void setNome(String Nome)
   {
      this.Nome = Nome;
   }

   public String getDescricao()
   {
      return Descricao;
   }

   public void setDescricao(String Descricao)
   {
      this.Descricao = Descricao;
   }

   public String getQuantidade()
   {
      return Quantidade;
   }

   public void setQuantidade(String Quantidade)
   {
      this.Quantidade = Quantidade;
   }

   public String getPreco()
   {
      return Preco;
   }

   public void setPreco(String Preco)
   {
      this.Preco = Preco;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      result += ", version: " + version;
      if (Nome != null && !Nome.trim().isEmpty())
         result += ", Nome: " + Nome;
      if (Descricao != null && !Descricao.trim().isEmpty())
         result += ", Descricao: " + Descricao;
      if (Quantidade != null && !Quantidade.trim().isEmpty())
         result += ", Quantidade: " + Quantidade;
      if (Preco != null && !Preco.trim().isEmpty())
         result += ", Preco: " + Preco;
      return result;
   }
}